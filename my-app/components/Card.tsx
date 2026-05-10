type CardProps = {
    title: string;
    description: string;
  };
  
  export default function Card({ title, description }: CardProps) {
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }