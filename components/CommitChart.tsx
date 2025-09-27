"use client";
import { ChartArea, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from "recharts";

export default function CommitChart() {
    const [data, setData] = useState<{ date: string; count: number }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch("/api/commits");
                if (!res.ok) throw new Error(`API Error: ${res.status}`);
                const json = await res.json();
                setData(json.map((d: any) => ({ date: d.date, count: Number(d.count) })));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-[400px] rounded-xl">
                <Loader className="animate-spin text-orange-400" size={48} />
            </div>
        );
    }

    return (
        <div
            className="w-full max-w-5xl mx-auto p-6 rounded-2xl shadow-lg"
        >
            <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-bold text-orange-400 mb-6">
                <ChartArea size={40}/> Daily Commit Trends
            </h2>

            <div className="w-full h-[450px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <defs>
                            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="95%" stopColor="#f97316" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#f97316" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#334155"
                            horizontal={true}
                            vertical={false}
                        />

                        <XAxis
                            dataKey="date"
                            tick={{ fill: "#cbd5e1", fontSize: 12 }}
                            axisLine={{ stroke: "#475569" }}
                            tickLine={{ stroke: "#475569" }}
                        />

                        <YAxis
                            allowDecimals={false}
                            tick={{ fill: "#cbd5e1", fontSize: 12 }}
                            axisLine={{ stroke: "#475569" }}
                            tickLine={{ stroke: "#475569" }}
                        />

                        {/* <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(30,41,59,0.95)",
                                border: "1px solid #475569",
                                borderRadius: "8px",
                                color: "white",
                                padding: "10px"
                            }}
                            labelStyle={{ color: "#f97316" }}
                            formatter={(value) => [`${value} commits`, "Commits"]}
                        /> */}

                        <Legend
                            wrapperStyle={{
                                paddingTop: "10px",
                                color: "#cbd5e1",
                                fontSize: "13px"
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="count"
                            stroke="url(#colorCount)"
                            strokeWidth={2}
                            dot={{
                                fill: "#000",
                                stroke: "#FFF",
                                strokeWidth: 2,
                                r: 6,
                                filter: "rgb(249, 116, 22)"
                            }}
                            activeDot={{
                                r: 8,
                                fill: "#FFF",
                                stroke: "#000",
                                strokeWidth: 2
                            }}
                            name="Daily Commits"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
