import { ThemeProvider } from "@/components/tools/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1>hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt temporibus veritatis magni repellat laudantium sed cum rerum dicta commodi rem minima veniam, esse praesentium ab, aliquam sunt ea officiis maxime!</p>
    </ThemeProvider>
  )
}

export default App
