"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { FileCheck, Activity, Droplet } from "lucide-react";

interface LabReportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LabReportModal({ isOpen, onClose }: LabReportModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Quality Analysis Report" className="max-w-2xl">
            <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                    <div>
                        <h4 className="font-bold text-lg">Batch #AQ-2024-05</h4>
                        <p className="text-sm text-muted-foreground">Tested: 12 Jan 2026</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <FileCheck className="w-3 h-3" /> PASSED
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Activity className="w-4 h-4 text-primary" />
                            <div className="font-medium">TDS Level</div>
                        </div>
                        <div className="text-2xl font-bold">75 ppm</div>
                        <div className="text-xs text-muted-foreground">Ideal range: 50-150 ppm</div>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Droplet className="w-4 h-4 text-primary" />
                            <div className="font-medium">pH Balance</div>
                        </div>
                        <div className="text-2xl font-bold">7.4</div>
                        <div className="text-xs text-muted-foreground">Neutral alkaline</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h5 className="font-medium border-b pb-1 text-primary">Biochemical & Microbiological Analysis</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        <div className="flex justify-between text-sm py-1 border-b border-dashed">
                            <span className="text-muted-foreground">E. Coli / 100ml</span>
                            <span className="font-mono text-green-600 font-semibold text-xs">ABSENT</span>
                        </div>
                        <div className="flex justify-between text-sm py-1 border-b border-dashed">
                            <span className="text-muted-foreground">Coliforms / 100ml</span>
                            <span className="font-mono text-green-600 font-semibold text-xs">ABSENT</span>
                        </div>
                        <div className="flex justify-between text-sm py-1 border-b border-dashed">
                            <span className="text-muted-foreground">Lead (as Pb)</span>
                            <span className="font-mono text-green-600 font-semibold text-xs">{"<"} 0.01 mg/L</span>
                        </div>
                        <div className="flex justify-between text-sm py-1 border-b border-dashed">
                            <span className="text-muted-foreground">Arsenic (as As)</span>
                            <span className="font-mono text-green-600 font-semibold text-xs">{"<"} 0.01 mg/L</span>
                        </div>
                        <div className="flex justify-between text-sm py-1 border-b border-dashed">
                            <span className="text-muted-foreground">Hardness (as CaCO₃)</span>
                            <span className="font-mono text-blue-600 font-semibold text-xs">45 mg/L</span>
                        </div>
                        <div className="flex justify-between text-sm py-1 border-b border-dashed">
                            <span className="text-muted-foreground">Chlorides (as Cl)</span>
                            <span className="font-mono text-blue-600 font-semibold text-xs">12 mg/L</span>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm text-blue-800 dark:text-blue-200">
                    Certified by NABL Accredited Laboratory. Report ID: QR-88592
                </div>

                <Button onClick={onClose} className="w-full">Download PDF</Button>
            </div>
        </Modal>
    );
}
