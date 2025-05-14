import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Text from "./Text";

interface TokenAllocationProps {
  name: string;
  percentage: number;
  color: string;
}

function TokenAllocation({ name, percentage, color }: TokenAllocationProps) {
  return (
    <div className="flex items-center mb-3">
      <div className={`w-4 h-4 rounded-full ${color} mr-3`}></div>
      <div className="flex-1 font-poppins text-sm">{name}</div>
      <div className="font-mono font-medium">{percentage}%</div>
    </div>
  );
}

interface UtilityItemProps {
  title: string;
  description: string;
}

function UtilityItem({ title, description }: UtilityItemProps) {
  return (
    <div className="mb-6">
      <h4 className="text-xl font-heading mb-2" style={{ fontFamily: 'ClashDisplay-Medium, sans-serif' }}>
        {title}
      </h4>
      <p className="text-foreground/70 font-poppins text-sm">
        {description}
      </p>
    </div>
  );
}

export default function Tokenomics() {
  const allocations = [
    { name: "Public & Fair Launch", percentage: 60, color: "bg-blue-500" },
    { name: "AI Intent Market Incentives", percentage: 5, color: "bg-green-500" },
    { name: "Community Incentives", percentage: 15, color: "bg-purple-500" },
    { name: "Ecosystem Development", percentage: 10, color: "bg-yellow-500" },
    { name: "Team and Advisors", percentage: 5, color: "bg-red-500" },
    { name: "Marketing and Partnerships", percentage: 5, color: "bg-orange-500" }
  ];

  const utilities = [
    {
      title: "Access the Intent Marketplace",
      description: "Use $ADIE tokens to create, subscribe, and transact within the decentralized intent marketplace."
    },
    {
      title: "Priority Execution and Staking Rewards",
      description: "Stake $ADIE to boost AI agent execution priority and earn staking incentives."
    },
    {
      title: "Governance Participation",
      description: "Vote on protocol upgrades, marketplace parameters, and key ecosystem decisions."
    },
    {
      title: "Premium Services and Optimization Tools",
      description: "Unlock advanced AI optimization models, personalized strategies, and premium intent templates with $ADIE."
    }
  ];

  return (
    <section className="w-full py-24 bg-foreground/[0.02] border-t border-foreground/10" id="tokenomics">
      <Container>
        <Heading as="h2" className="text-4xl md:text-5xl mb-16 text-center">
          Tokenomics
        </Heading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Token Info */}
          <div className="border-y border-foreground/10 p-8">
            <div className="mb-8">
              <Text variant="muted" className="mb-1">Token Name</Text>
              <Heading as="h3" className="text-3xl">$ADIE</Heading>
            </div>
            
            <div className="mb-8">
              <Text variant="muted" className="mb-1">Total Supply</Text>
              <Heading as="h3" className="text-3xl">1,000,000,000 $ADIE</Heading>
            </div>
            
            <div>
              <Text variant="muted" className="mb-4">Token Allocation</Text>
              <div className="space-y-2">
                {allocations.map((allocation, index) => (
                  <TokenAllocation 
                    key={index}
                    name={allocation.name}
                    percentage={allocation.percentage}
                    color={allocation.color}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Utility */}
          <div className="border-y border-foreground/10 p-8">
            <Heading as="h3" className="text-2xl mb-6">Utility</Heading>
            
            <div className="space-y-6">
              {utilities.map((utility, index) => (
                <UtilityItem 
                  key={index}
                  title={utility.title}
                  description={utility.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 