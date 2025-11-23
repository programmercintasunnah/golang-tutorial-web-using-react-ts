import CodeBlock from "../components/CodeBlock";

export default function EnvDatabase() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Konfigurasi Environment Database</h1>

      <p className="mb-4">
        Pada tahap ini, kita akan membuat konfigurasi environment untuk koneksi
        database PostgreSQL pada project Golang kamu.
      </p>

      <p className="font-semibold mb-2">Contoh kode konfigurasi:</p>

      <CodeBlock
        title="config/database.go"
        language="go"
        code={`var (
    host     = os.Getenv("DB_HOST")      //"localhost"
    port     = os.Getenv("DB_PORT")      //"5432"
    dbName   = os.Getenv("DB_NAME")      //"database name"
    user     = os.Getenv("DB_USER")      //"db user"
    password = os.Getenv("DB_PASS")      //"DB pass"
    sslMode  = os.Getenv("DB_SSLMODE")   //"disable"
    schema   = os.Getenv("DB_SCHEMA")    //"db schema"
)`}
      />

      <h2 className="text-2xl font-bold mt-8 mb-3">Buat File <code>.env</code></h2>

      <p className="mb-4">Letakkan file <code>.env</code> di root project Golang:</p>

      <CodeBlock
        title=".env"
        language="bash"
        code={`DB_HOST=localhost
DB_PORT=5432
DB_NAME=pre_tes_nbs
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_SSLMODE=disable
DB_SCHEMA=public`}
      />

      <h2 className="text-2xl font-bold mt-8 mb-3">Load ENV otomatis</h2>

      <p className="mb-2">Tambahkan package untuk load environment:</p>

      <CodeBlock language="bash" code={`go get github.com/joho/godotenv`} />

      <p className="mt-4 mb-2">Lalu load ENV di <code>main.go</code>:</p>

      <CodeBlock
        title="main.go"
        language="go"
        code={`package main

import (
    "log"
    "github.com/joho/godotenv"
)

func main() {
    if err := godotenv.Load(); err != nil {
        log.Println("No .env file found")
    }

    // Jalankan server atau init DB selanjutnya
}`}
      />

      <p className="mt-8">
        Setelah ini, kita bisa lanjut ke bagian: <b>membuat file koneksi database</b>.
      </p>
    </div>
  );
}
