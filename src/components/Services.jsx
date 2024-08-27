import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-background p-20 max-sm:p-10">
        <h2 className="text-[#0077b6] text-7xl font-bold max-sm:text-[52px] qwitcher">Services</h2>
        <p className="text-zinc-800 text-lg max-sm:text-[16px] font-semibold mukta">
          We do Roofing Materials Trading & Roofing Installtions.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="text-center">
            <img
              src="/GI.jpg"
              alt="G.I Roofing"
              className="mx-auto rounded"
            />
            <p className="text-muted-foreground text-xl max-sm:text-[18px] mt-4 mukta">
              G.I ROOFING
            </p>
          </div>
          <div className="text-center">
            <img
              src="/tensile.jpg"
              alt="Tensile Roofing"
              className="mx-auto rounded"
            />
            <p className="text-muted-foreground text-xl max-sm:text-[18px] mt-4 mukta">
              TENSILE ROOFING
            </p>
          </div>
          <div className="text-center">
            <img
              src="/upvc.jpg"
              alt="UPVC Roofing"
              className="mx-auto rounded"
            />
            <p className="text-muted-foreground text-xl max-sm:text-[18px] mt-4 mukta">
              UPVC ROOFING
            </p>
          </div>
          <div className="text-center">
            <img
              src="/polycarbonate.avif"
              alt="Polycarbonate Roofing"
              className="mx-auto rounded"
            />
            <p className="text-muted-foreground text-xl max-sm:text-[18px] mt-4 mukta">
              POLYCARBONATE ROOFING
            </p>
          </div>
          <div className="text-center">
            <img
              src="/puff_panel.avif"
              alt="Puff Panel Roofing"
              className="mx-auto rounded"
            />
            <p className="text-muted-foreground text-xl max-sm:text-[18px] mt-4 mukta">
             PUFF PANEL ROOFING
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
