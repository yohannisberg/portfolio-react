
export function FancyCallout({ title = 'Hello from React', body = 'This component was imported into Builder.io' }) {
  return (
    <section style={{
      borderRadius: 16,
      padding: 24,
      background: 'teal',
      color: 'white',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
    }}>
      <h3 style={{ fontSize: 24, margin: 0 }}>{title}</h3>
      <p style={{ opacity: 0.95, marginTop: 6 }}>{body}</p>
    </section>
  );
}