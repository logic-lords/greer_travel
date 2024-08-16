import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Leaderboard() {
  const leaderboardData = [
    {
      avatar: "/images/avatar1.jpeg",
      name: "John Doe",
      co2Savings: "1.2 kg/CO2",
    },
    {
      avatar: "/images/avatar2.jpeg",
      name: "Jane Appleseed",
      co2Savings: "1.5 kg/CO2",
    },
    {
      avatar: "/images/avatar3.jpeg",
      name: "Sarah Miller",
      co2Savings: "1.8 kg/CO2",
    },
    {
      avatar: "/images/avatar4.jpeg",
      name: "Tom Wilson",
      co2Savings: "2.1 kg/CO2",
    },
  ]
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-3xl mx-auto ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold mx-auto">Leaderboard</h2>
      </div>
      <div className="grid gap-4">
        {leaderboardData.map((user, index) => (
          <div key={index} className="flex items-center justify-between bg-muted rounded-lg p-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 cursor-pointer">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name.charAt(0)}
                  {user.name.charAt(user.name.indexOf(" ") + 1)}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{user.name}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span>{user.co2Savings}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

