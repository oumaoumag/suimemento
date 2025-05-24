import { Flex, Heading } from '@radix-ui/themes';
import { ConnectButton } from '@mystem/dapp-kit';
import { Link } from 'react-router-dom';
import '../styles/global.css'; 

function Layout({ childreb }: { children: React.ReactNode }) {
    return (
        <div className="layout">
            <header>
                <Flex justify="between" align="center" p="4" className="header">
                    <Heading as="h1" size="8">SuiMemento</Heading>
                </Flex>
            </header>
        </div>
    )
}
