import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
        <div className="mb-4 flex justify-center">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">404 — Сторінку не знайдено</h1>
        <p className="mt-3 text-sm text-gray-600">
          Такої сторінки не існує.
        </p>
        <Link
          href="/"
className="mt-6 inline-block bg-[#4C5154] px-6 py-2.5 text-sm font-bold text-white no-underline transition-colors hover:bg-[#3a3f42]"
        >
          На головну
        </Link>
      </div>
    </div>
  );
}
