import { Heading, Text, Flex } from '@radix-ui/themes';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };


    // Mock event data // To be replaced with blockchain data letter
    const events = [ 
        { id: 1, name: "AfroTech Summit", date: "2025-03-15"},
        { id: 2, name: "Nairobi Music Fest", date: "2025-04-10"},
    ];

    return (
        <div className='page home'>
            <Heading size="9">Welcome to SuiMemento</Heading>
            <Text size='5'>Revolutionizing Event Engagement with NFT Badges</Text>
            <Slider {...settings}>
                {events.map(event => (
                    <div key={event.id}>
                        <Heading>{event.name}</Heading>
                        <Text>Date: {event.date}</Text>
                    </div>
                ))}
            </Slider>
            {/* TODO: Add testimonials and highlights */}
        </div>
    );
}

export default Home;