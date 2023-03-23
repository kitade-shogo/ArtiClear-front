import { useTheme, Text, Link, Button } from "@nextui-org/react";

const MyComponent = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Text
        css={{
          color: "$blue800",
          fontSize: "$sm",
          padding: "$2 $4",
        }}
      >
        Using tokens
      </Text>
      <p
        style={{
          color: theme.colors.primary.value,
          fontSize: theme.fontSizes.sm.value,
          padding: `${theme.space[2].value} ${theme.space[4].value}`,
        }}
      >
        Using color theme value Name
      </p>
      <p
        style={{
          color: theme.colors.primary,
        }}
        className="text-3xl font-bold underline"
      >
        usingTokens
      </p>
      <Button
        style={{
          color: theme.colors.gradient.value,
        }}
      >
        default
      </Button>
    </div>
  );
};

export default MyComponent;
