import {
    AppShell,
    Footer,
    Group,
    Header,
    Text
} from "@mantine/core"
export const ApplicationContainer = ({children}) => {
    return(
        <AppShell
        styles={{
            main: {
                background: '#FFFFFF',
                width: "100vw",
                height: "100vh",
                paddingLeft: '0px',
            }
        }}
        fixed
        footer={
            <Footer height={60} p="md">
               
            </Footer>
        }
        header={
            <Header height={70} p="md">
                <div style={{display: "flex", alignItems: 'center', height: "100%"}}>
                    <Text size="lg" weight="bolder">Alpaca Activity</Text>
                </div>
            </Header>
        }
        
        >
          {children}
        </AppShell>
    )
}