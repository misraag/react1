export default function Tabs({ children, button, ComponentType }) {
  return (
    <>
      <ComponentType>{button}</ComponentType>
      {children}
    </>
  );
}
