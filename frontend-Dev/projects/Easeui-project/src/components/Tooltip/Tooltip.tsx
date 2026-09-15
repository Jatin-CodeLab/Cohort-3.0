import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const tooltipVariants = cva(
	"absolute z-50 rounded-md px-3 py-2 text-sm whitespace-nowrap pointer-events-none",
	{
		variants: {
			variant: {
				dark: "bg-slate-900 text-white",
				light: "bg-white text-slate-900 border border-gray-200 shadow-md",
			},

			side: {
				top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
				bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
				left: "right-full top-1/2 -translate-y-1/2 mr-2",
				right: "left-full top-1/2 -translate-y-1/2 ml-2",
			},
		},

		defaultVariants: {
			variant: "dark",
			side: "top",
		},
	},
);

interface TooltipProps
	extends
		React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof tooltipVariants> {
	content: string;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
	({ content, children, className, variant, side, ...props }, ref) => {
		const [show, setShow] = useState(false);

		return (
			<div
				className="relative inline-flex"
				onMouseEnter={() => setShow(true)}
				onMouseLeave={() => setShow(false)}
			>
				{children}

				{show && (
					<div
						ref={ref}
						className={cn(
							tooltipVariants({
								variant,
								side,
							}),
							className,
						)}
						{...props}
					>
						{content}
					</div>
				)}
			</div>
		);
	},
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };
