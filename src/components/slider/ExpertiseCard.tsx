type ExpertiseProps = {
  expertise: {
    title: string
    description: string
    image: string
  }
}
export default function ExpertiseCard({ expertise }: ExpertiseProps) {
  return (
    <div className="bg-[#E6EAFB] rounded-xl items-center py-10 px-5 overflow-hidden flex flex-col gap-2">
      <h2 className="text-titleBlack text-xl font-bold tracking-wide">
        {expertise.title}
      </h2>
      <p className="text-desgray text-lg text-center">
        {expertise.description}
      </p>
      <img src={expertise.image} className="w-[300px] h-[200px] mt-4" />
    </div>
  )
}
