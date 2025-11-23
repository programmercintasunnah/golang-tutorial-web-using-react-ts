import CodeBlock from "../components/CodeBlock";

export default function CreateProject() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Membuat Project Golang + DBMate</h1>

            <p className="mb-4">
                Berikut adalah langkah-langkah membuat project Golang sederhana dan setup DBMate untuk migrasi database.
            </p>

            {/* Step 1 */}
            <h2 className="text-2xl font-semibold mt-6 mb-3">1. Buat folder project</h2>
            <CodeBlock
                code={`mkdir pre-tes-nbs
cd pre-tes-nbs/`}
                language="bash"
            />

            {/* Step 2 */}
            <h2 className="text-2xl font-semibold mt-6 mb-3">2. Init Go Module</h2>
            <CodeBlock
                code={`go mod init pre-tes-nbs`}
                language="bash"
            />

            {/* Step 3 */}
            <h2 className="text-2xl font-semibold mt-6 mb-3">3. Buat file main.go</h2>
            <CodeBlock
                title="main.go"
                language="go"
                code={`package main

import "fmt"

func main() {
    fmt.Println("cek cek")
}`}
            />

            {/* Step 4 */}
            <h2 className="text-2xl font-semibold mt-6 mb-3">4. Jalankan aplikasi</h2>
            <CodeBlock
                code={`go run main.go`}
                language="bash"
            />

            {/* Step 5 */}
            <h2 className="text-2xl font-semibold mt-6 mb-3">5. Buat migration memakai DBMate</h2>
            <CodeBlock
                code={`dbmate new create_product_table`}
                language="bash"
            />

            <p className="mt-3 mb-4">
                Ini akan menghasilkan file migration di <code>db/migrations/</code>.
            </p>

            {/* Step 6 */}
            <h2 className="text-2xl font-semibold mt-6 mb-3">6. Buat folder koneksi</h2>
            <CodeBlock
                title="db/connection/index.go"
                language="go"
                code={`package connection

import (
    "database/sql"
    _ "github.com/lib/pq"
)

func ConnectDB() (*sql.DB, error) {
    return sql.Open("postgres", "postgres://user:password@localhost:5432/dbname?sslmode=disable")
}`}
            />

            <p className="mt-6">
                Setelah ini, project Golang-mu sudah siap dipakai untuk mulai coding API, database, dan fitur lainnya.
            </p>
        </div>
    );
}
