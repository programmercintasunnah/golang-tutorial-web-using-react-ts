📦 1. Install Golang
Linux
```
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
```

Cek versi
```
go version
```

📁 2. Membuat Project Golang Baru
```
mkdir pre-tes-nbs
cd pre-tes-nbs
go mod init pre-tes-nbs
code .
```

Buat file main.go:
```
package main

import "fmt"

func main() {
    fmt.Println("cek cek")
}
```

Jalankan:
```
go run main.go
```

🗄️ 3. Setup DB Migration dengan DBMate
Install DBMate (Ubuntu)
```
sudo apt install dbmate
```
Buat folder migrasi
DBMate otomatis membuat folder:
```
db/migrations
```
Membuat migration baru
```
dbmate new create_product_table
```

Hasilnya contoh:
```
db/migrations/20251123073716_create_product_table.sql
```

Isi contoh migration:
```
-- migrate:up
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- migrate:down
DROP TABLE IF EXISTS products;
```

🧩 4. Membuat Folder dan File Koneksi Database

Buat folder:
```
db/connection/index.go
```

Isi:
```
package connection

import (
    "database/sql"
    "fmt"
    "os"

    _ "github.com/lib/pq"
)

var (
    host     = os.Getenv("DB_HOST")
    port     = os.Getenv("DB_PORT")
    dbName   = os.Getenv("DB_NAME")
    user     = os.Getenv("DB_USER")
    password = os.Getenv("DB_PASSWORD")
    sslMode  = os.Getenv("DB_SSLMODE")
    schema   = os.Getenv("DB_SCHEMA")
)

func ConnectDB() (*sql.DB, error) {

    dsn := fmt.Sprintf(
        "host=%s port=%s user=%s password=%s dbname=%s sslmode=%s search_path=%s",
        host, port, user, password, dbName, sslMode, schema,
    )

    db, err := sql.Open("postgres", dsn)
    if err != nil {
        return nil, err
    }

    if err := db.Ping(); err != nil {
        return nil, err
    }

    fmt.Println("Database connected successfully")
    return db, nil
}
```

🔐 5. Buat .env
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=syirkah_data
DB_USER=postgres
DB_PASSWORD=password123
DB_SSLMODE=disable
DB_SCHEMA=public
```

🧪 6. Coba Koneksi dari main.go

Edit main.go:
```
package main

import (
    "log"
    "pre-tes-nbs/db/connection"
)

func main() {
    _, err := connection.ConnectDB()
    if err != nil {
        log.Fatal(err)
    }
}
```

Jalankan:
```
go run main.go
```

Jika berhasil:
```
Database connected successfully
```