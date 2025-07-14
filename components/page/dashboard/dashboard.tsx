"use client";
import { Search, ArrowRight, Badge } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

// ----------------- Reusable Card Component -----------------

type CircleCardProps = {
    name: string;
    amount: string;
    members?: string;
    isPrivate?: boolean;
    paidCount?: number;
    totalCount?: number;
    nextAmount?: string;
    dueDate?: string;
    createdByMe?: boolean;
};

const CircleCard = ({
    name,
    amount,
    members,
    isPrivate = false,
    paidCount = 0,
    totalCount = 0,
    nextAmount,
    dueDate,
    createdByMe = false,
}: CircleCardProps) => {
    const percentage = totalCount ? Math.round((paidCount / totalCount) * 100) : 0;

    return (
        <div className="bg-white rounded-xl p-4 shadow-sm">
            {isPrivate ? (
                <Card className="w-[330px] md:w-[390px] border-none shadow-none">
                    <CardContent className="p-2 md:p-6">
                        {/* Header with badges */}
                        <div className="flex gap-2 mb-4">
                            <div className="bg-[#FEF0FF] text-[#000000] border px-3 py-1 rounded-full text-sm font-medium cursor-default">
                                Monthly
                            </div>
                            <div className="bg-[#FCDCFB] text-[#390053] hover:bg-[#fcdcfb] px-3 py-1 rounded-full text-sm font-medium cursor-default">Active</div>
                        </div>

                        {/* Main content */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-[#000000] mb-2">{name}</h2>
                                <p className="text-[#6b7280] text-sm"> {createdByMe ? "You created this" : "Member"} • {totalCount} members</p>
                            </div>

                            <div className="text-right">
                                <p className="text-[#6b7280] text-sm mb-1">Next contribution</p>
                                <p className="text-xl font-semibold text-[#000000] mb-1">{nextAmount}</p>
                                <p className="text-[#6b7280] text-sm">{dueDate}</p>
                            </div>
                        </div>

                        {/* Progress section */}
                        <div className="space-y-3">
                            <Progress
                                value={percentage}
                                className="h-2 bg-[#e5e7eb]"
                                style={
                                    {
                                        "--progress-background": "#390053",
                                    } as React.CSSProperties
                                }
                            />
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#6b7280]">{paidCount}/{totalCount} paid</span>
                                <span className="text-[#6b7280] font-medium">{percentage}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            ) : (
                <div className="w-[330px] md:w-[390px]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-[#390053] font-semibold text-sm">JOIN CIRCLE</h2>
                        <span className="text-[#b6b6b6] text-sm">Verified User</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#390053] rounded-full flex-shrink-0"></div>

                        <h1 className="text-[#000] text-2xl font-semibold">{name}</h1>
                    </div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                            <Image src="/placeholder.svg?height=32&width=32" alt={`Profile ${i}`} width={32} height={32} className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" className="rounded-full px-6 py-2 border-[#000] text-[#000] hover:bg-[#eee9ff] flex items-center gap-2">
                            Join Now <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <div className="bg-[#eee9ff] text-[#000] px-4 py-2 rounded-full text-sm font-medium">{amount}</div>
                        <div className="bg-[#fde3ff] text-[#000] px-4 py-2 rounded-full text-sm font-medium">{members}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

// ----------------- Hero Section -----------------

const HeroSection = () => (
    <div className="flex flex-col items-center py-6 px-2 md:px-0">
        <div className="w-full max-w-2xl flex justify-between items-center px-6">
            <div>
                <h1 className="text-3xl md:text-4xl font-medium md:font-semibold mb-1">Àjọ begins with trust.</h1>
                <p className="text-3xl md:text-4xl font-normal md:font-semibold">Start saving with yours</p>
            </div>
            <button className="hidden md:flex flex-col items-center">
                <Image src="/plus.png" width={56} height={56} alt="plus" />
                <p className="text-sm font-semibold text-[#424242] mt-2">CREATE NEW AJO</p>
            </button>
        </div>
        <div className="mt-4 w-full max-w-[704px]">
            <div className="flex items-center gap-2 px-4 rounded-lg w-full h-[48px] bg-[#FAF9FC] shadow-md">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input type="text" placeholder="SEARCH FOR CIRCLES..." className="outline-none w-full bg-transparent text-sm" />
            </div>
        </div>
    </div>
);

// ----------------- Recommended & Private Circles -----------------

const Dashboard = () => {
    const recommended = [
        { name: "Weekly Contribution", amount: "₦45,000", members: "15/25 Members" },
        { name: "Emergency Fund Group", amount: "₦45,000", members: "15/25 Members" },
        { name: "Young Professionals Ajo", amount: "₦45,000", members: "15/25 Members" },
        { name: "Monthly Business Circle", amount: "₦45,000", members: "15/25 Members" },
    ];

    const privateCircles = [
        {
            name: "Family Support",
            paidCount: 6,
            totalCount: 8,
            nextAmount: "₦50,000",
            dueDate: "July 15, 2023",
            isPrivate: true,
            createdByMe: true,
            amount: "",
        },
        {
            name: "Business Fund",
            paidCount: 4,
            totalCount: 6,
            nextAmount: "₦30,000",
            dueDate: "July 20, 2023",
            isPrivate: true,
            createdByMe: true,
            amount: "",
        },
    ];

    return (
        <main className="bg-white">
            <HeroSection />

            <section className="bg-[#F6F1FB] py-6 px-4 md:px-10">
                <h2 className="text-lg font-semibold">Recommended Circles</h2>
                <p className="text-sm text-muted-foreground mb-4">Circles tailored to your preferences</p>
                <div className="flex gap-4 overflow-x-auto">
                    {recommended.map((c, idx) => (
                        <CircleCard key={idx} {...c} />
                    ))}
                </div>
            </section>

            <section className="py-6 px-4 md:px-10 bg-[#FAF9FC]">
                <h2 className="text-lg font-semibold mb-2">My Private Circles</h2>
                <div className="flex gap-4 overflow-x-auto">
                    {privateCircles.map((c, idx) => (
                        <CircleCard key={idx} {...c} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
