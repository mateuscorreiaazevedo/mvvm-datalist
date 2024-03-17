export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-10">
      <div className="container flex items-center justify-between">
        <span>
          Powered by: <strong>Mateus Azevedo</strong>
        </span>
        <span>&copy; {new Date().getFullYear().toString()}</span>
      </div>
    </footer>
  )
}
