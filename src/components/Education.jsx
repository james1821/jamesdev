const Education = () => {
  const customRed = '#86C232'; 
  
  return (
    <section id='Education' className='bg-primary-bg h-full'>
      <h1 className='text-center text-2xl md:text-4xl font-bold pb-4 pt-12 text-primary'>Education</h1>
      
      <Chrono
        mode="VERTICAL_ALTERNATING"
        scrollable={{ scrollbar: true }}
        theme={{
          primary: customRed,
          secondary: customRed,
          cardBgColor: 'grey',
          titleColor: 'white',
          titleColorActive: 'white',
          cardTitleColor: customRed,
        }}
      >
   
          <div>
            <div style={{ width: "250px", height: "250px" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="test"
                src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
              />
            </div>
          </div>
       
        
      </Chrono>
    </section>
  );
};

export default Education;
