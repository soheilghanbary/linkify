import { getUserById, getUserBySession } from "@server/user"
import { useQuery } from "@tanstack/react-query"

const useUser = () => {
  return useQuery<User, Error>({
    queryKey: ["user"],
    queryFn: () => getUserBySession(),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}

const useUserById = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  })
}

export { useUser, useUserById }
