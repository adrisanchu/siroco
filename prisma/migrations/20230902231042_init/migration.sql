-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "alias" TEXT,
    "startDate" TEXT NOT NULL,
    "description" TEXT
);
