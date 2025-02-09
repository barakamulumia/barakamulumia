import { Skeleton } from '../ui/skeleton';

export function PageLoadingSkeleton() {
  return (
    <div className='space-y-6 p-4 py-8 w-full h-[100vh]'>
      {/* Header section */}
      <div className='space-y-2 w-full'>
        <Skeleton className='h-10 w-full bg-teal-100' />
        <Skeleton className='h-4 w-full bg-teal-100' />
      </div>

      {/* Main content grid */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {/* Generate multiple content cards */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className='space-y-3'>
            <Skeleton className='h-[200px] w-full rounded-xl bg-teal-100' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-3/4 bg-teal-100' />
              <Skeleton className='h-4 w-1/2 bg-teal-100' />
            </div>
          </div>
        ))}
      </div>

      {/* Footer section */}
      <div className='flex items-center justify-between pt-4'>
        <Skeleton className='h-10 w-1/2 bg-teal-100' />
        <div className='flex gap-2'>
          <Skeleton className='h-10 w-10 bg-teal-100' />
          <Skeleton className='h-10 w-10 bg-teal-100' />
        </div>
      </div>
    </div>
  );
}
