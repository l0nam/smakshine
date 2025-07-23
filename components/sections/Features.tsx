import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

const features = [
  {
    title: "Надёжная защита",
    description:
      "Безопасность игроков и данных обеспечена продуманной системой прав и античитом.",
    src: "/images/seasons/image1.png",
  },
  {
    title: "Сообщество",
    description:
      "Играй вместе с друзьями или присоединяйся к активному и дружелюбному комьюнити.",
    src: "/images/seasons/image1.png",
  },
  {
    title: "Скорость",
    description:
      "Сервер оптимизирован для быстрой загрузки и минимальных задержек.",
    src: "/images/seasons/image1.png",
  },
  {
    title: "Гибкая настройка",
    description:
      "Полностью кастомизируемый геймплей и возможности под ваши сценарии.",
    src: "/images/seasons/image1.png",
  },
];

export default function Features() {
  return (
    <section className="container py-20">
      <div className="container text-center lg:text-left">
        <h1 className="text-5xl font-bold">Фишки сервера</h1>
        <p className="mt-2 text-foreground/80 text-lg font-medium">
          То, чем мы гордимся
        </p>
      </div>

      <div className="grid gap-3 mt-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <Card key={index} className="shadow-none">
            <CardHeader>
                <Image
                  src={feature.src ?? "https://cdn.dribbble.com/userupload/39824990/file/original-96232e9475f7b8c25a53d822960263b4.jpg"}
                  alt="Картинка фишки"
                  width={800}
                  height={450}
                  className="rounded-[10px]"
                />
            </CardHeader>
            <CardContent className="text-center lg:text-left">
              <CardTitle className="text-2xl">{feature.title}</CardTitle>
              <CardDescription className="text-foreground/80 text-lg">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
