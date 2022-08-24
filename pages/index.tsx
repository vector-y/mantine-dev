import { Button, Group, Stack, useMantineTheme } from "@mantine/core";
import Head from 'next/head'

export default function IndexPage() {
  const theme = useMantineTheme();
  return (
    <Group mt={50} position="center">
      <Button size="xl">Welcome to Mantine!</Button>
      HELLO
    </Group>
    //  <Stack style={{backgroundColor: theme.colors.gray[0]}} mx="auto"> 
    //  </Stack>
  );
}
