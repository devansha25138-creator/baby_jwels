export default function ParticleField({ tone = "gold", count = 18 }) {
  return (
    <div className={`particle-field particle-field--${tone}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          style={{
            "--x": `${(index * 37) % 100}%`,
            "--y": `${(index * 53) % 100}%`,
            "--d": `${5 + (index % 6)}s`,
            "--s": `${4 + (index % 4)}px`,
          }}
        />
      ))}
    </div>
  );
}
