import CodeBlock from "../components/CodeBlock";

export default function InstallGolang() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Install Golang</h1>

            <p className="mb-4">
                Berikut cara install Golang di Linux:
            </p>

            <CodeBlock
                title="Download dan Install Golang"
                code={`wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin`}
            />

            <p className="mt-6 mb-4">Cek versi golang:</p>

            <CodeBlock
                code={`go version`}
            />

            <p className="mt-6 mb-4">Contoh program pertama:</p>

            <CodeBlock
                title="hello.go"
                code={`package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}`}
            />
        </div>
    );
}
