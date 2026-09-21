'use client';

import { useState } from 'react';
import { ArrowRightIcon, WhatsAppIcon } from './Icons';
import { siteUrl } from '../lib/site';

const message = 'I found Ziramzis — a Mombasa digital studio for websites, brands and web apps. Thought you might like it.';

export default function ShareSite() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Ziramzis — Busy Bee Studio', text: message, url: siteUrl });
        return;
      } catch (error) {
        if (error?.name === 'AbortError') return;
      }
    }
    await copyLink();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt('Copy this link:', siteUrl);
    }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${message}\n\n${siteUrl}`)}`;

  return (
    <div className="share-site">
      <p>Know someone building something good?</p>
      <div className="share-site__actions">
        <button type="button" onClick={share} className="share-site__main">
          Share Ziramzis <ArrowRightIcon size={15} />
        </button>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Forward Ziramzis through WhatsApp" className="share-site__whatsapp">
          <WhatsAppIcon size={16} />
        </a>
      </div>
      <button type="button" onClick={copyLink} className="share-site__copy" aria-live="polite">
        {copied ? 'Link copied' : 'Copy site link'}
      </button>
    </div>
  );
}
