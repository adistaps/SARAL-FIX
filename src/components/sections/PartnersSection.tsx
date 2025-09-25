import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  // Placeholder partner logos - you can replace these with actual partner company names/logos
  const partners = [
    { name: "DHL", logo: "DHL" },
    { name: "FedEx", logo: "FedEx" },
    { name: "UPS", logo: "UPS" },
    { name: "Maersk", logo: "Maersk" },
    { name: "Singapore Airlines", logo: "SIA" },
    { name: "PSA International", logo: "PSA" },
    { name: "Changi Airport", logo: "CAG" },
    { name: "Emirates", logo: "Emirates" }
  ];

  return (
    <section className="py-20 bg-card-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Trusted <span className="text-accent">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading companies worldwide to provide seamless logistics solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <Card key={index} className="border-0 bg-background hover:shadow-md transition-shadow group">
              <CardContent className="p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/10 transition-colors">
                    <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                      {partner.logo.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{partner.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;