import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
          Chúng tôi có thể giúp bạn bằng cách nào?
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/discussions.svg" alt="Book a demo" width="48" height="48" />
            <h3 className="my-3">Tham gia diễn đàn</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Tham gia diễn đàn cộng đồng trên GitHub
            </p>
            <Link
              href="https://github.com/Khoa-Hoc-Du-Lieu/docs/discussions"
              className="text-primary dark:text-primary-100"
            >
              Đến diễn đàn &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/customer.svg" alt="Support" width="48" height="48" />
            <h3 className="my-3">Support</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Dyte&apos;s expert support team is excited to help. Connect for
              dedicated 1:1 support!
            </p>
            <Link
              href="https://dyte.io/contact"
              className="text-primary dark:text-primary-100"
            >
              Contact Us &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img src="/static/landing-page/chat.svg" alt="FAQs" width="48" height="48" />
            <h3 className="my-3">FAQs</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Browse through our FAQs to find answers to commonly asked
              questions.
            </p>
            <Link href="/faq" className="text-primary dark:text-primary-100">
              View FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
