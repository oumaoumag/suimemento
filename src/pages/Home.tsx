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
    { id: 1, name: "AfroTech Summit", data: "2025-03-15"},
    { id: 2, name: "Nairobi Music Fest", date: "2025-04-10"},
}