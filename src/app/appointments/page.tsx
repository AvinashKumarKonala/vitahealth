"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Priya Sharma",
    specialty: "General Physician",
    date: "Mon, 15 Sep",
    time: "10:30 AM",
    type: "Video",
    status: "Upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Neha Kapoor",
    specialty: "Nutritionist",
    date: "Wed, 17 Sep",
    time: "4:00 PM",
    type: "Video",
    status: "Upcoming",
  },
  {
    id: 3,
    doctor: "Dr. Arjun Mehta",
    specialty: "Dermatologist",
    date: "Fri, 5 Sep",
    time: "11:00 AM",
    type: "Clinic",
    status: "Completed",
  },
];

export default function AppointmentsPage() {
  return (
    <AppShell>
      <div className="px-4 py-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-ink">
              Appointments
            </h1>
            <p className="mt-1 text-muted">
              Manage bookings, reminders, and follow-ups in one place.
            </p>
          </div>
          <Button>
            <Calendar size={16} /> Book Appointment
          </Button>
        </div>

        <div className="mt-8 space-y-4">
          {appointments.map((a) => (
            <div
              key={a.id}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-white p-5 sm:flex-row sm:items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold text-ink">{a.doctor}</h2>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      a.status === "Upcoming"
                        ? "bg-mint text-forest"
                        : "bg-cream text-muted"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted">{a.specialty}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {a.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {a.time}
                  </span>
                  <span className="flex items-center gap-1">
                    {a.type === "Video" ? (
                      <Video size={12} />
                    ) : (
                      <MapPin size={12} />
                    )}
                    {a.type}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                {a.status === "Upcoming" ? (
                  <>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm">
                      {a.type === "Video" ? "Join Call" : "Directions"}
                    </Button>
                  </>
                ) : (
                  <Button size="sm" variant="soft">
                    View Summary
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
