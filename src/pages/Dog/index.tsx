import { useEffect, useState } from "react";
import DogService from "../../services/Dog.service";

export default function Dog() {
  const [dog, setDog] = useState<string>();

  useEffect(() => {
    const timeout = setInterval(async () => {
      const dog = await DogService.getDogAxios();
      setDog(dog?.message);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <img src={dog} alt="dog" />
    </div>
  );
}
