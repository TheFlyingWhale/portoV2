import {
    Container,
    Heading,
    Link,
    ListItem,
    Nav,
    UnorderedList,
} from "../General";

const DashboardNav: React.FC = () => {
    return (
        <Container w="w-full" p="p-1" alignItems="items-center" bg="bg-white">
            <Container w="w-10/12" px="px-6" py="py-3">
                <Nav>
                    <Container
                        flexDirection="flex-row"
                        justifyContent="justify-between"
                    >
                        <Container>
                            <Link
                                href="."
                                hover="hover:text-blue-500"
                                active="active:text-orange-500"
                            >
                                <Heading fontSize="text-xl">Portfolio</Heading>
                            </Link>
                        </Container>
                        <UnorderedList
                            isFlex={true}
                            flexDirection="flex-row"
                            listStyle="list-none"
                            gap="gap-6"
                        >
                            <ListItem>
                                <Link
                                    href=""
                                    hover="hover:text-blue-500"
                                    active="active:text-orange-500"
                                >
                                    Users
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href="messages"
                                    hover="hover:text-blue-500"
                                    active="active:text-orange-500"
                                >
                                    Messages
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href=""
                                    hover="hover:text-blue-500"
                                    active="active:text-orange-500"
                                >
                                    Cases
                                </Link>
                            </ListItem>
                        </UnorderedList>
                    </Container>
                </Nav>
            </Container>
        </Container>
    );
};

export default DashboardNav;
