"use client";

import { ThemeSwitch } from '@/components/ui/theme-switch';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'motion/react';

function DesignSystemDemo() {
  return (
    <div 
      style={{ 
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-primary)',
        padding: 'var(--space-8)',
        transition: 'var(--duration-normal)',
      }}
    >
      {/* Theme Switcher */}
      <div 
        style={{ 
          position: 'fixed',
          top: 'var(--space-6)',
          right: 'var(--space-6)',
          zIndex: 'var(--z-50)',
        }}
      >
        <ThemeSwitch />
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <h1 
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--font-size-6xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-4)',
              letterSpacing: 'var(--letter-spacing-tight)',
            }}
          >
            Lusso
          </h1>
          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--font-size-xl)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Ultra-Modular Design System Demo
          </p>
        </header>

        {/* Design System Showcase */}
        <div style={{ display: 'grid', gap: 'var(--space-12)' }}>
          
          {/* Typography Section */}
          <section>
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-text-primary)',
              }}
            >
              Typography System
            </h2>
            
            <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
              {/* Display Font */}
              <div>
                <h3 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--font-size-4xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-primary)',
                  }}
                >
                  Luxury Dining Experience
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  Display Font: DM Serif Display
                </p>
              </div>

              {/* Body Font */}
              <div>
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--font-size-lg)',
                    lineHeight: 'var(--line-height-relaxed)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Welcome to Lusso, where every meal is a masterpiece crafted with the finest ingredients 
                  and presented with unparalleled elegance. Our chefs combine traditional techniques with 
                  modern innovation to create unforgettable culinary experiences.
                </p>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                  Body Font: TBD (not yet determined)
                </p>
              </div>
            </div>
          </section>

          {/* Color Palette Section */}
          <section>
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-text-primary)',
              }}
            >
              Color System
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
              {/* Primary Colors */}
              <div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-lg)' }}>Primary</h3>
                <div 
                  style={{
                    height: '80px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-contrast)',
                    fontWeight: 'var(--font-weight-medium)',
                  }}
                >
                  Gold (#D4AF37)
                </div>
              </div>

              {/* Secondary Colors */}
              <div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-lg)' }}>Secondary</h3>
                <div 
                  style={{
                    height: '80px',
                    backgroundColor: 'var(--color-secondary)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-secondary-contrast)',
                    fontWeight: 'var(--font-weight-medium)',
                  }}
                >
                  Dark Blue (#0F1035)
                </div>
              </div>

              {/* Background */}
              <div>
                <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-lg)' }}>Background</h3>
                <div 
                  style={{
                    height: '80px',
                    backgroundColor: '#0D0D0D',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D4AF37',
                    fontWeight: 'var(--font-weight-medium)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  Dark Grey (#0D0D0D)
                </div>
              </div>
            </div>
          </section>

          {/* Component Examples */}
          <section>
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-text-primary)',
              }}
            >
              shadcn/ui Integration
            </h2>
            
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-lg)' }}>
                shadcn Button Components (automatically themed)
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <Button variant="default">Reserve Table</Button>
                <Button variant="secondary">View Menu</Button>
                <Button variant="outline">Contact Us</Button>
                <Button variant="ghost">Learn More</Button>
                <Button variant="link">Our Story</Button>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-lg)' }}>
                Custom Design System Buttons
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                {[
                  { variant: 'primary', label: 'Primary Action' },
                  { variant: 'secondary', label: 'Secondary Action' },
                  { variant: 'accent', label: 'Accent Action' },
                ].map((button) => (
                  <button
                    key={button.variant}
                    style={{
                      padding: 'var(--space-3) var(--space-6)',
                      borderRadius: 'var(--radius-lg)',
                      border: 'none',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      fontFamily: 'var(--font-body)',
                      backgroundColor: `var(--color-${button.variant})`,
                      color: `var(--color-${button.variant}-contrast)`,
                      cursor: 'pointer',
                      transition: 'var(--duration-normal)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `var(--color-${button.variant}-hover)`;
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `var(--color-${button.variant})`;
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    }}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Card Example */}
          <section>
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-text-primary)',
              }}
            >
              Surface Components
            </h2>
            
            <div 
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <h3 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Signature Dish
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--font-size-base)',
                  lineHeight: 'var(--line-height-relaxed)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Pan-seared duck breast with cherry gastrique, seasonal vegetables, 
                and truffle-infused potato gratin. A harmonious blend of flavors 
                that represents the pinnacle of our culinary artistry.
              </p>
              <div 
                style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-primary)',
                }}
              >
                $45
              </div>
            </div>
          </section>

          {/* Aurora Background Demo */}
          <section style={{ marginTop: 'var(--space-16)' }}>
            <h2 
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-8)',
                color: 'var(--color-text-primary)',
              }}
            >
              Aurora Background Component
            </h2>
            
            <AuroraBackground
              style={{ 
                height: '400px', 
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
                border: '1px solid var(--color-border)'
              }}
            >
                <motion.div
                  initial={{ opacity: 0.0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-4)',
                    textAlign: 'center',
                    zIndex: 10
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--font-size-4xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--space-2)',
                    }}
                  >
                    Welcome to Lusso
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--color-text-secondary)',
                      maxWidth: '600px',
                      lineHeight: 'var(--line-height-relaxed)',
                    }}
                  >
                    Experience culinary excellence with our aurora-powered hero section. 
                    Perfect for restaurant landing pages with dynamic, theme-aware backgrounds.
                  </p>
                  <Button style={{ marginTop: 'var(--space-4)' }}>
                    Make Reservation
                  </Button>
                </motion.div>
              </AuroraBackground>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function MockupPage() {
  return <DesignSystemDemo />;
}