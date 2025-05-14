import Container from "./Container";
import Text from "./Text";
import Heading from "./Heading";

export default function Hero() {
  return (
    <section className="w-full py-20 border-t border-foreground/10">
      <Container>
        <div className="text-center md:text-left">
          <Heading
            as="h1"
            className="text-6xl md:text-7xl lg:text-8xl mb-32 leading-[0.9em]"
          >
            Own Your Intent.
            <br />
            <span className="text-primary">Trust the Execution.</span>
          </Heading>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <Text 
              variant="body" 
              className="text-foreground/80 max-w-xl"
            >
              ADIE.AI is a Web3 automation platform built on the MCP protocol, where AI agents 
              understand your intentions, analyze real-time blockchain data, and seamlessly 
              execute actions through an open, decentralized marketplace enhanced by predictive intelligence.
            </Text>
            
            <div className="flex flex-row gap-4 mt-2 md:mt-auto md:self-end">
              <a 
                href="https://t.me/ADIE_AI" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 hover:shadow-md transition-all duration-300 font-poppins font-medium whitespace-nowrap cursor-pointer"
              >
                Join Us
              </a>
              <a 
                href="https://docs.adieai.xyz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-foreground/20 px-6 py-3 rounded-lg hover:bg-foreground/5 hover:border-foreground/40 hover:shadow-sm transition-all duration-300 font-poppins font-medium whitespace-nowrap cursor-pointer"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 