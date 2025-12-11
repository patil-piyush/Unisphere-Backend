export default function AdminLoading() {
    return (
      <div className="space-y-6">
        {/* Header Skeleton */}
        <div className="h-10 bg-muted/50 rounded-lg animate-pulse w-1/3" />
        
        {/* Stats Skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-muted/50 rounded-xl animate-pulse" />
          ))}
        </div>
  
        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-muted/50 rounded-lg animate-pulse w-1/4" />
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-muted/50 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }