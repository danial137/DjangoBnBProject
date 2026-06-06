import Image from "next/image";
import React from "react";

const MyReservationPage = () => {
    return (
        <main className="max-w-[1200px] mx-auto px-6 py-6">
            <h1 className="text-3xl font-bold mb-8">My Reservations</h1>

            <div className="space-y-6">
                {/* Reservation 1 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-5 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div>
                        <div className="relative aspect-square overflow-hidden rounded-xl">
                            <Image
                                src="/beach_1.jpg"
                                fill
                                alt="Beach House"
                                className="object-cover hover:scale-110 transition duration-300"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-3 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Property</h2>

                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <strong>Check in:</strong> 14/09/2026
                                </p>

                                <p>
                                    <strong>Check out:</strong> 20/09/2026
                                </p>

                                <p>
                                    <strong>Number of nights:</strong> 2
                                </p>

                                <p>
                                    <strong>Total price:</strong> $2000
                                </p>
                            </div>
                        </div>

                        <button className="w-fit mt-6 px-6 py-3 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition">
                            Go To Property
                        </button>
                    </div>
                </div>

                {/* Reservation 2 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-5 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div>
                        <div className="relative aspect-square overflow-hidden rounded-xl">
                            <Image
                                src="/beach_1.jpg"
                                fill
                                alt="Beach House"
                                className="object-cover hover:scale-110 transition duration-300"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-3 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Property</h2>

                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <strong>Check in:</strong> 14/09/2026
                                </p>

                                <p>
                                    <strong>Check out:</strong> 20/09/2026
                                </p>

                                <p>
                                    <strong>Number of nights:</strong> 2
                                </p>

                                <p>
                                    <strong>Total price:</strong> $2000
                                </p>
                            </div>
                        </div>

                        <button className="w-fit mt-6 px-6 py-3 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition">
                            Go To Property
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyReservationPage;