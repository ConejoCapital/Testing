import Image from 'next/image';

export default function Mascot() {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <Image
        src="/clippy.gif"
        alt="Clippy, the Microsoft Office assistant"
        width={100}
        height={100}
        className="animate-bounce"
      />
    </div>
  );
}