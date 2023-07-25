

const About: React.FC = () => {
  return (
    <section className="bg-gray-200 shadow-custom text-black  py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">Multimatics Nig. Ltd</h3>
          </div>
          <div className="md:w-1/2">
            <p>
              Welcome to the business space of Studio L'Amour Abuja. We are a
              digital multimedia production company with core interest in
              Photography, videography, digital design, and print, event
              planning, and management. Also, our parent company Multimatics Nig
              Ltd, undertakes the execution of contracts in civil works
              including borehole drilling, rural and urban electrification, and
              the supply of exquisite household / office furniture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
