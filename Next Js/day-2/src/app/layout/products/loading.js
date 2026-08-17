import ProtectedRoute from "@/components/ProtectedRoute";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-4 rounded-2xl border p-4">
            <Skeleton className="h-[250px] w-full" />

            <Skeleton className="h-5 w-20" />

            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />

            <div className="flex justify-between pt-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  );
};

export default Loading;
