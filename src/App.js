import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./components/AllRoutes";
import { Footer } from "./components/Footer";

function App() {
  const newFont = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Lexend:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">`;

  return (
    <Box w="100%" fontFamily="Poppins, sans-serif" m={0} p={0}>
      <Box dangerouslySetInnerHTML={{ __html: newFont }} />
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
