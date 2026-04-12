type TeamMember = {
  name: string;
  title: string;
  image: string;
  description: string;
};

const team: TeamMember[] = [
  {
    name: "John Doe",
    title: "Founder / CEO",
    image: "https://via.placeholder.com/150",
    description: "Short description about experience and background.",
  },
  {
    name: "Jane Smith",
    title: "Lead Engineer",
    image: "https://via.placeholder.com/150",
    description: "Another short description about skills and experience.",
  },
];

function About() {
  return (
    <div className="min-h-screen px-6 py-12">
      
      {/* Page Container */}
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-highlight text-center">
          About Us
        </h1>

        {/* Team List */}
        <div className="flex flex-col gap-10">
          
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-center md:items-start"
            >
              
              {/* LEFT SIDE (Image + Name/Title) */}
              <div className="flex flex-col items-center text-center md:w-48 flex-shrink-0">
                
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border border-border"
                />

                {/* Name */}
                <h2 className="mt-3 font-semibold text-foreground">
                  {member.name}
                </h2>

                {/* Title */}
                <p className="text-sm text-muted">
                  {member.title}
                </p>

              </div>

              {/* RIGHT SIDE (Description) */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-muted leading-relaxed">
                  {member.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default About;