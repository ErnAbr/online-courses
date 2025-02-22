export const Loading = ({ size, color }: { size?: string; color?: string }) => {
  return <span style={{ fontSize: size, backgroundColor: color }}>⏳</span>;
};
