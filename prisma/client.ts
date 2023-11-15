// Prisma 클라이언트를 가져옵니다.
import { PrismaClient } from "@prisma/client";

// 싱글톤 패턴을 사용하여 Prisma 클라이언트 인스턴스를 생성하는 함수
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// PrismaClientSingleton 타입을 정의합니다. 이 타입은 prismaClientSingleton 함수의 반환 타입과 동일합니다.
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Node.js의 global 객체를 확장하여 Prisma 클라이언트를 포함할 수 있도록 합니다.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// 싱글톤 패턴을 사용하여 Prisma 클라이언트 인스턴스를 생성하거나, 이미 존재하는 경우 해당 인스턴스를 사용합니다.
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Prisma 클라이언트 인스턴스를 export 합니다. 이를 통해 다른 파일에서도 해당 인스턴스를 사용할 수 있습니다.
export default prisma;

// 개발 환경에서만 글로벌 객체에 Prisma 클라이언트 인스턴스를 할당합니다.
// 이렇게 하면 개발 환경에서 서버가 핫 리로드될 때마다 새로운 클라이언트 인스턴스가 생성되는 것을 방지할 수 있습니다.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
