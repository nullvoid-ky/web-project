import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

interface User {
  _id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

const UserData = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/read-all"
        );
        setData(response.data.users);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div className="flex flex-col bg-pearl-200 p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      {data.length ? (
        <div className="grid grid-cols-1 gap-y-2 sm:gap-y-4 w-full">
          <div className="flex justify-around bg-gray-100 p-2">
            <div className="w-1/4 text-left break-words">Username</div>
            <div className="w-1/6 text-left break-words">ID</div>
            <div className="w-1/6 text-left">Created At</div>
            <div className="w-1/6 text-left">Updated At</div>
          </div>
          {data.map((user) => (
            <div key={user._id} className="flex justify-around p-2">
              <div className="w-1/4 text-left break-words">{user.username}</div>
              <div className="w-1/6 text-left break-words">{user._id}</div>
              <div className="w-1/6 text-left">
                {dayjs(user.createdAt).format("DD-MM-YY HH:mm:ss")}
              </div>
              <div className="w-1/6 text-left">
                {dayjs(user.updatedAt).format("DD-MM-YY HH:mm:ss")}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No Users Data</p>
      )}
    </div>
  );
};

export default UserData;
