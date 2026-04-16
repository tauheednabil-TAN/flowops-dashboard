type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  const normalized = status.toLowerCase();

  const styles: Record<string, React.CSSProperties> = {
    success: {
      backgroundColor: "#dcfce7",
      color: "#166534",
    },
    pending: {
      backgroundColor: "#fef3c7",
      color: "#92400e",
    },
    failed: {
      backgroundColor: "#fee2e2",
      color: "#991b1b",
    },
  };

  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        ...styles[normalized],
      }}
    >
      {status}
    </span>
  );
}