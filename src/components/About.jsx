import React, { Component } from 'react';

// Define the images array
const images = [
  'JM.jpg',
  'PicRotate.png',
  'JM.jpg',
];
class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    // Start the slideshow when the component mounts
    this.startSlideshow();
  }

  componentWillUnmount() {
    // Stop the slideshow when the component unmounts to avoid memory leaks
    clearInterval(this.slideshowInterval);
  }

  startSlideshow() {
    // Set an interval to change the image every 3 seconds
    this.slideshowInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % images.length,
      }));
    }, 3000); // Change image every 3 seconds (3000 milliseconds)
  }

  render() {
    const { MyData } = this.props;
    const { currentIndex } = this.state;

    return (
      <section id='About' className='h-[100vh] bg-secondary'>
        <div className="flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12">
            <div className="text-center text-white">
              <h2 className='text-2xl font-bold pb-4'>About Me</h2>
              <p>{MyData.AboutMe}</p>
            </div>
          </div>

          <div className="w-1/2">
            <div className="slideshow-container">
              {/* Render the current image */}
              <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
