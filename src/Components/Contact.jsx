

const Contact = () => {
  return (
    <section className="bg-white text-center py-12">
      <h2 className="text-4xl font-bold text-[#916C47] mb-12">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center max-w-[180px]">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-[#916C47]"></div>
            )}
            <h3 className="mt-4 font-bold text-[#916C47]">{member.name}</h3>
            <p className="font-semibold leading-tight">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Decorative Bottom */}
      <div className="mt-16">
        <svg
          viewBox="0 0 1440 100"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#916C47"
            d="M0,0 C600,100 900,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
