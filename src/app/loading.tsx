import Image from "next/image";

export default async function Loading() {
  return (
    <>
      {process.env.LOGO_URL ? (
        <img
          className="absolute top-0 object-top object-contain -z-10"
          alt="Logo"
          src={process.env.LOGO_URL}
          style={{
            height: 480,
            width: "100%",
          }}
        />
      ) : (
        <Image
          className="absolute top-0 object-top object-contain -z-10"
          alt="Logo"
          src={process.env.LOGO_URL || "/logo.png"}
          priority
          width={854}
          height={480}
          quality={100}
          style={{
            marginTop: "-100px",
          }}
        />
      )}
    </>
  );
}
