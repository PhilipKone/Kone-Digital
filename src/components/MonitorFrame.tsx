import React from 'react';

export const MonitorFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="monitor-wrapper">
      <div className="studio-background" />
      <div className="imac-container">
        <img src="/imac.png" alt="iMac Monitor" className="imac-image" />
        <div className="imac-screen">
          <div className="imac-screen-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
