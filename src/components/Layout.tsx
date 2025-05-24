import { Flex, Heading } from '@radix-ui/themes';
import { ConnectButton } from '@mystem/dapp-kit';
import { Link } from 'react-router-dom';
import '../styles/global.css'; 

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="layout">
            <header>
                <Flex justify="between" align="center" p="4" className="header">
                    <Heading as="h1" size="8">SuiMemento</Heading>
                    <nav>
                        <Flex gap="4">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/events" className="nav-link">Events</Link>
                            <Link to="/mint" className='nav-link'>Mint Badge</Link>
                            <Link to="/profile" className='nav-link'>Profile</Link>
                            <Link to="/marketplace" className='nav-link'>Marketplace</Link>
                            <Link to="/organizer" className='nav-link'>Organizer</Link>
                        </Flex>
                    </nav>
                    <ConnectButton />
                </Flex>
            </header>
            <main>{children}</main>
            <footer className='footer'>
                <p>© 2025 SuiMemento - Celebrating African Events in Web3</p>
            </footer>
        </div>
    );
}

